

package com.example.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.ems.entity.Employee;
import com.example.ems.service.EmployeeService;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @PostMapping
    public Employee addEmployee(
            @RequestBody Employee employee) {

        return service.saveEmployee(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {

        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployee(
            @PathVariable Long id) {

        return service.getEmployeeById(id);
    }

  @PutMapping("/{id}")
public ResponseEntity<Employee> updateEmployee(
        @PathVariable Long id,
        @RequestBody Employee employee) {

    Employee updatedEmployee =
            service.updateEmployee(id, employee);

    return ResponseEntity.ok(updatedEmployee);
}

    @DeleteMapping("/{id}")
    public String deleteEmployee(
            @PathVariable Long id) {

        service.deleteEmployee(id);

        return "Employee Deleted Successfully";
    }
}