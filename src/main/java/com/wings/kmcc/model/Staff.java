package com.wings.kmcc.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Staff")
public class Staff implements Serializable  {
	
	
	private static final long serialVersionUID = 1L;

	@Id
	@Column( nullable = false, updatable = false, name= "staffid")
	private String staffid;
	
	@Column(name= "nic")
	private String nic;
	
	@Column(name= "departmentid")
	private String departmentid;
	
	@Column(name= "name")
	private String name;
	
	@Column(name= "phonenumber")
	private String phonenumber;
	
	@Column(name= "email")
	private String email;
	
	@Column(name= "gender")
	private String gender;
	
	@Column(name= "dob")
	private String dob;
	
	@Column(name= "jobrole")
	private String jobrole;
	
	@Column(name= "maritalstatus")
	private String maritalstatus;
	
	@Column(name= "address")
	private String address;
	
	@Column(name= "qualification")
	private String qualification;
	
	@Column(name= "guardianname")
	private String guardianname;
	
	@Column(name= "guardianmobile")
	private String guardianmobile;
	
	@Column(name= "image")
	private String image;
	
	
	public Staff() {}


	public Staff(String staffid, String nic, String departmentid, String name, String phonenumber, String email,
			String gender, String dob, String jobrole, String maritalstatus, String address, String qualification,
			String guardianname, String guardianmobile, String image) {
		super();
		this.staffid = staffid;
		this.nic = nic;
		this.departmentid = departmentid;
		this.name = name;
		this.phonenumber = phonenumber;
		this.email = email;
		this.gender = gender;
		this.dob = dob;
		this.jobrole = jobrole;
		this.maritalstatus = maritalstatus;
		this.address = address;
		this.qualification = qualification;
		this.guardianname = guardianname;
		this.guardianmobile = guardianmobile;
		this.image = image;
	}


	public String getStaffid() {
		return staffid;
	}


	public void setStaffid(String staffid) {
		this.staffid = staffid;
	}


	public String getNic() {
		return nic;
	}


	public void setNic(String nic) {
		this.nic = nic;
	}


	public String getDepartmentid() {
		return departmentid;
	}


	public void setDepartmentid(String departmentid) {
		this.departmentid = departmentid;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPhonenumber() {
		return phonenumber;
	}


	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}


	public String getJobrole() {
		return jobrole;
	}


	public void setJobrole(String jobrole) {
		this.jobrole = jobrole;
	}


	public String getMaritalstatus() {
		return maritalstatus;
	}


	public void setMaritalstatus(String maritalstatus) {
		this.maritalstatus = maritalstatus;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getQualification() {
		return qualification;
	}


	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	public String getGuardianname() {
		return guardianname;
	}


	public void setGuardianname(String guardianname) {
		this.guardianname = guardianname;
	}


	public String getGuardianmobile() {
		return guardianmobile;
	}


	public void setGuardianmobile(String guardianmobile) {
		this.guardianmobile = guardianmobile;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	@Override
	public String toString() {
		return "Staff [staffid=" + staffid + ", nic=" + nic + ", departmentid=" + departmentid + ", name=" + name
				+ ", phonenumber=" + phonenumber + ", email=" + email + ", gender=" + gender + ", dob=" + dob
				+ ", jobrole=" + jobrole + ", maritalstatus=" + maritalstatus + ", address=" + address
				+ ", qualification=" + qualification + ", guardianname=" + guardianname + ", guardianmobile="
				+ guardianmobile + ", image=" + image + "]";
	}
	
	
	


	
	
	
	
	

}
