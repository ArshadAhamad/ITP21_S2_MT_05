package com.wings.kmcc.service;

import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wings.kmcc.exception.UserNotFoundException;
import com.wings.kmcc.model.Staff;
import com.wings.kmcc.repo.StaffRepo;


@Service
@Transactional
public class StaffService {
	private final StaffRepo staffRepo;
	
	@Autowired
	public StaffService(StaffRepo staffRepo) {
		this.staffRepo = staffRepo;
	}
	
	public Staff addStaff(Staff staff) {
		return staffRepo.save(staff);
	}
	
	public List<Staff> findAllStaffs(){
		return staffRepo.findAll();
	}
	
	public Staff findStaffById(String staffid) {
		return staffRepo.findStaffById(staffid)
				.orElseThrow(() -> new UserNotFoundException("User by id" + staffid + "was not found"));
	}
	
	public Staff updateStaff(Staff staff) {
		return staffRepo.save(staff);
	}
	
	public void deleteStaff(String staffid) {
		staffRepo.deleteStaffById(staffid);
	}
}
