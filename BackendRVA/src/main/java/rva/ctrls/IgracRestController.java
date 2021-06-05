package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Igrac;
import rva.jpa.Tim;
import rva.repository.IgracRepository;
import rva.repository.TimRepository;

@CrossOrigin
@RestController
@Api(tags = {"Igrac CRUD operacije"})
public class IgracRestController {

	@Autowired
	private IgracRepository igracRepository;
	
	@Autowired 
	private TimRepository timRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("igrac")
	@ApiOperation(value= "Vraca kolekciju svih igraca iz baze podataka")
	public Collection<Igrac> getIgraci(){
		return igracRepository.findAll();
	}
	
	@GetMapping("igrac/{id}")
	@ApiOperation(value= "Vraca igraca na osnovu proslednjenog ID-a")
	public Igrac getIgrac(@PathVariable("id") Integer id) {
		return igracRepository.getOne(id);
	}
	
	@GetMapping("igraciTim/{id}")
	@ApiOperation(value= "Vraca kolekciju igraca na osnovu proslednjenog id u zavisnosti od tima u kojim igraju")
	public Collection<Igrac> getIgraciTima(@PathVariable("id") Integer id) {
		Tim t = timRepository.getOne(id);
		return igracRepository.findByTim(t);
	}
	
	@PostMapping("igrac")
	@ApiOperation(value= "Dodaje novog igraca u bazu podataka")
	public ResponseEntity<Igrac> insertIgrac(@RequestBody Igrac igrac) {
		if (!igracRepository.existsById(igrac.getId())) {
			igracRepository.save(igrac);
			return new ResponseEntity<Igrac>(HttpStatus.OK);
		} 
		return new ResponseEntity<Igrac>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("igrac")
	@ApiOperation(value= "Update-uje igraca iz baze podataka")
	public ResponseEntity<Igrac> updateIgrac(@RequestBody Igrac igrac) {
		if (!igracRepository.existsById(igrac.getId())) {
			return new ResponseEntity<Igrac>(HttpStatus.CONFLICT);
		}
		igracRepository.save(igrac);
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	}
	
	@DeleteMapping("igrac/{id}")
	@ApiOperation(value= "Brise igraca iz baze podataka na osnovu prosledjenog ID-a")
	public ResponseEntity<Igrac> deleteIgrac(@PathVariable Integer id) {
		if (!igracRepository.existsById(id)) {
			return new ResponseEntity<Igrac>(HttpStatus.NO_CONTENT);
		}
		igracRepository.deleteById(id);
		if (id == -100) {
			jdbcTemplate.execute(" INSERT INTO \"igrac\" (\"id\", \"ime\", \"prezime\", \"broj_reg\", \"datum_rodjenja\", \"nacionalnost\",\"tim\") "
					+ "VALUES ( -100, 'Test ime', 'Test prezime', 'Test brojReg', to_date('01.01.2020.', 'dd.mm.yyyy.'), 1, 1)");
		}
		return new ResponseEntity<Igrac>(HttpStatus.OK);
	} 
}
