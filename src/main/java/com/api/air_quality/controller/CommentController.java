package com.api.air_quality.controller;

import com.api.air_quality.dto.ApiResponse;
import com.api.air_quality.model.CommentModel;
import com.api.air_quality.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;

    @PostMapping("/api/v1/comment/save")
    public ResponseEntity<ApiResponse> saveComment(@RequestBody CommentModel commentModel) {
        commentRepository.save(commentModel);

        ApiResponse response = new ApiResponse("Comment saved successfully");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/v1/comment/all")
    public List<CommentModel> getAllComment() {
        return commentRepository.findAll();
    }

    @PutMapping("/api/v1/comment/update/{id}")
    public ResponseEntity<ApiResponse> updateComment(@PathVariable String id, @RequestBody CommentModel commentModel) {
        System.out.println(commentModel.getReply());
        Optional<CommentModel> selectedComment = commentRepository.findById(id);

        if (selectedComment.isPresent()) {
            CommentModel comment = selectedComment.get();

            comment.setReply(commentModel.getReply());
            commentRepository.save(comment);
        }

        ApiResponse response = new ApiResponse("Updated Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/v1/comment/like/{id}")
    public ResponseEntity<ApiResponse> likeComment(@PathVariable String id, @RequestBody CommentModel commentModel) {
        Optional<CommentModel> selectedComment = commentRepository.findById(id);

        if (selectedComment.isPresent()) {
            CommentModel comment = selectedComment.get();

            comment.setLike(commentModel.getLike());
            commentRepository.save(comment);
        }

        ApiResponse response = new ApiResponse("Updated Code:" + id + " successfully");
        return ResponseEntity.ok(response);
    }
}
