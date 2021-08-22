package com.wings.kmcc.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wings.kmcc.model.Staff;
import com.wings.kmcc.service.StaffService;

@RestController
@RequestMapping("/staff")
public class StaffController {
	private final StaffService staffService;
	
	public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }
		
	
	
	
	@GetMapping("/all")
    public ResponseEntity<List<Staff>> getAllStaff () {
        List<Staff> staff = staffService.findAllStaffs();
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }
	
	@GetMapping("/find/{staff_id}")
    public ResponseEntity<Staff> getStaffById (@PathVariable("staffid") String staffid) {
        Staff staff = staffService.findStaffById(staffid);
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Staff> addEmployee(@RequestBody Staff staff) {
    	Staff newStaff = staffService.addStaff(staff);
        return new ResponseEntity<>(newStaff, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Staff> updateStaff(@RequestBody Staff staff) {
    	Staff updateStaff = staffService.updateStaff(staff);
        return new ResponseEntity<>(updateStaff, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{staffid}")
    public ResponseEntity<?> deleteStaff(@PathVariable("staffid") String staffid) {
    	staffService.deleteStaff(staffid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
