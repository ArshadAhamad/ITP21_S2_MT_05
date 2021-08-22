package com.wings.kmcc.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wings.kmcc.model.Staff;

public interface StaffRepo extends JpaRepository<Staff,String> {
	
	
	Optional<Staff> findStaffById (String staffid);

	void deleteStaffById(String staffid);

}
