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
import rva.jpa.Nacionalnost;
import rva.repository.NacionalnostRepository;

@CrossOrigin
@RestController
@Api(tags = {"Nacionalnost CRUD operacije"})
public class NacionalnostRestController {
	
	@Autowired
	private NacionalnostRepository nacionalnostRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("nacionalnost")
	@ApiOperation(value= "Vraca kolekciju svih nacionalnosti iz baze podataka")
	public Collection<Nacionalnost> getNacionalnosti() {
		return nacionalnostRepository.findAll();
	}
	
	@GetMapping("nacionalnost/{id}")
	@ApiOperation(value= "Vraca nacionalnost na osnovu ID-a")
	public Nacionalnost getNacionalnost(@PathVariable("id") Integer id) {
		return nacionalnostRepository.getOne(id);
	}
	
	@GetMapping("nacionalnostNaziv/{naziv}")
	@ApiOperation(value= "Vraca nacionalnost na osnovu naziva")
	public Collection<Nacionalnost> getNacionalnostByNaziv(@PathVariable("naziv") String naziv) {
		return nacionalnostRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("nacionalnost")
	@ApiOperation(value= "Upisuje novu nacionalnost u bazu podataka")
	public ResponseEntity<Nacionalnost> insertNacionalnost(@RequestBody Nacionalnost nacionalnost) {
		if (!nacionalnostRepository.existsById(nacionalnost.getId())) {
			nacionalnostRepository.save(nacionalnost);
			return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
		} 
		return new ResponseEntity<Nacionalnost>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("nacionalnost")
	@ApiOperation(value= "Update-uje nacionalnost iz baze podataka")
	public ResponseEntity<Nacionalnost> updateNacionalnost(@RequestBody Nacionalnost nacionalnost) {
		if (!nacionalnostRepository.existsById(nacionalnost.getId())) {
			return new ResponseEntity<Nacionalnost>(HttpStatus.CONFLICT);
		}
		nacionalnostRepository.save(nacionalnost);
		return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
	}
	
	@DeleteMapping("nacionalnost/{id}")
	@ApiOperation(value= "Brise nacionalnost iz baze podataka na osnovu prosledjenog ID-a")
	public ResponseEntity<Nacionalnost> deleteNacionalnost(@PathVariable Integer id) {
		if (!nacionalnostRepository.existsById(id)) {
			return new ResponseEntity<Nacionalnost>(HttpStatus.NO_CONTENT);
		}
		nacionalnostRepository.deleteById(id);
		if (id == -100) {
			jdbcTemplate.execute(" INSERT INTO \"nacionalnost\" (\"id\", \"naziv\", \"skracenica\") "
					+ "VALUES ( -100, 'Naziv test', 'Skracenica test')");
		}
		return new ResponseEntity<Nacionalnost>(HttpStatus.OK);
	} 
}
