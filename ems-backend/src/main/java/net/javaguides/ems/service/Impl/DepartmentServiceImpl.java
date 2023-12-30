package net.javaguides.ems.service.Impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.entity.Department;
import net.javaguides.ems.exception.ResourceNotFountException;
import net.javaguides.ems.mapper.DepartmentMapper;
import net.javaguides.ems.repository.DepartmentRepository;
import net.javaguides.ems.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;
    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {

        Department department= DepartmentMapper.mapToDepartment(departmentDto);
        Department savedepartment=departmentRepository.save(department);



        return DepartmentMapper.maptoDepartmentDto(savedepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        departmentRepository.findById(departmentId);
       Department department= departmentRepository.findById(departmentId).orElseThrow(
                ()->new ResourceNotFountException("Department id not exist with a given id "+departmentId)
        );

        return DepartmentMapper.maptoDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {

       List<Department> departments= departmentRepository.findAll();
        return departments.stream().map((department) -> DepartmentMapper.maptoDepartmentDto(department)).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updateDepartment) {
        Department department=departmentRepository.findById(departmentId).orElseThrow(
                ()->new ResourceNotFountException("department is not exist with given id"+departmentId)
        );
        department.setDepartmentName(updateDepartment.getDepartmentName());
        department.setDepartmentDescription(updateDepartment.getDepartmentDescription());
        Department savedDepartment=departmentRepository.save(department);


        return DepartmentMapper.maptoDepartmentDto(savedDepartment);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        departmentRepository.findById(departmentId).orElseThrow(
                ()->new ResourceNotFountException("department is not exist with given id"+departmentId)
        );
        departmentRepository.deleteById(departmentId);

    }
}
