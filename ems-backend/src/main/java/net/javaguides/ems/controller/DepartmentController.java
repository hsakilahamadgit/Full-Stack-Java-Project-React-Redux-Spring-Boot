package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.entity.Department;
import net.javaguides.ems.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {
    private DepartmentService departmentService;


    // Build  Add Department Rest API
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto){
      DepartmentDto department=  departmentService.createDepartment(departmentDto);
      return  new ResponseEntity<>(department, HttpStatus.CREATED);
    }

    // Build Get Department Rest API
    @GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentBYId(@PathVariable("id") Long departmentId){
     DepartmentDto departmentDto   =departmentService.getDepartmentById(departmentId);

     return  new ResponseEntity<>(departmentDto,HttpStatus.OK);
    }
    //Built det all department rest api
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments(){
        List<DepartmentDto> departments=departmentService.getAllDepartments();
        return ResponseEntity.ok(departments);
    }

    //Built update rest api
    @PutMapping("{id}")
    public  ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long departmentId,@RequestBody DepartmentDto updatedDepartment){
       DepartmentDto departmentDto= departmentService.updateDepartment(departmentId,updatedDepartment);
       return ResponseEntity.ok(departmentDto);
    }
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleteDepartment(@PathVariable("id") Long departmentId){
        departmentService.deleteDepartment(departmentId);
        return ResponseEntity.ok("Department deleted Successfully");
    }
}
