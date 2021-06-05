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
import rva.jpa.Liga;
import rva.repository.LigaRepository;


@CrossOrigin
@RestController
@Api(tags = {"Liga CRUD operacije"})
public class LigaRestController {

	@Autowired
	private LigaRepository ligaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("liga")
	@ApiOperation(value= "Vraca kolekciju svih liga iz baze podataka")
	public Collection<Liga> getLige() {
		return ligaRepository.findAll();
	}
	
	@GetMapping("liga/{id}")
	@ApiOperation(value= "Vraca ligu na osnovu ID-a")
	public Liga getLiga(@PathVariable("id") Integer id) {
		return ligaRepository.getOne(id);
	}
	
	@GetMapping("ligaNaziv/{naziv}")
	@ApiOperation(value= "Vraca ligu na osnovu naziva")
	public Collection<Liga> getLigaByNaziv(@PathVariable("naziv") String naziv) {
		return ligaRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("liga")
	@ApiOperation(value= "Upisuje novu ligu u bazu podataka")
	public ResponseEntity<Liga> insertLiga(@RequestBody Liga liga) {
		if (!ligaRepository.existsById(liga.getId())) {
			ligaRepository.save(liga);
			return new ResponseEntity<Liga>(HttpStatus.OK);
		} 
		return new ResponseEntity<Liga>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("liga")
	@ApiOperation(value= "Update-uje ligu iz baze podataka")
	public ResponseEntity<Liga> updateLiga(@RequestBody Liga liga) {
		if (!ligaRepository.existsById(liga.getId())) {
			return new ResponseEntity<Liga>(HttpStatus.CONFLICT);
		}
		ligaRepository.save(liga);
		return new ResponseEntity<Liga>(HttpStatus.OK);
	}
	
	@DeleteMapping("liga/{id}")
	@ApiOperation(value= "Brise ligu iz baze podataka na osnovu prosledjenog ID-a")
	public ResponseEntity<Liga> deleteLiga(@PathVariable Integer id) {
		if (!ligaRepository.existsById(id)) {
			return new ResponseEntity<Liga>(HttpStatus.NO_CONTENT);
		}
		ligaRepository.deleteById(id);
		if (id == -100) {
			jdbcTemplate.execute(" INSERT INTO \"liga\" (\"id\", \"naziv\", \"oznaka\") "
					+ "VALUES ( -100, 'Naziv test', 'Oznaka test')");
		}
		return new ResponseEntity<Liga>(HttpStatus.OK);
	} 
}
