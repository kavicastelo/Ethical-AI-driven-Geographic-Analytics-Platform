package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.BlogModel;
import com.api.air_quality.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BlogController {

    @Autowired
    BlogRepository blogRepository;

    @PostMapping("/api/v1/blog/create")
    public ResponseEntity<ApiResponse> saveBlog(@RequestBody BlogModel blogModel) {
        blogRepository.save(blogModel);

        ApiResponse response = new ApiResponse("Blog saved successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/blog/all")
    public List<BlogModel> getAllBlog() {
        return blogRepository.findAll();
    }

    @DeleteMapping("/api/v1/blog/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String id) {
        blogRepository.deleteById(id);

        ApiResponse response = new ApiResponse("Deleted Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/blog/update/{id}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable String id, @RequestBody BlogModel blogModel) {
        Optional<BlogModel> selectedBlog = blogRepository.findById(id);

        if (selectedBlog.isPresent()) {
            BlogModel b = selectedBlog.get();

            b.setTitle(blogModel.getTitle());
            b.setDescription(blogModel.getDescription());
            b.setContent(blogModel.getContent());
            b.setImage(blogModel.getImage());
            b.setTags(blogModel.getTags());
            b.setUpdated_at(blogModel.getUpdated_at());

            blogRepository.save(b);
        }

        ApiResponse response = new ApiResponse("Updated Code:"+id+" successfully");
        return ResponseEntity.ok(response);
    }
}
