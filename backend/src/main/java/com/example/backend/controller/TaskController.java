package com.example.backend.controller;

import com.example.backend.model.Task;
import com.example.backend.model.User;
import com.example.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/user/{userId}")
    public List<Task> getUserTask(@PathVariable UUID userId){
        return taskService.getTasksByUser(userId);
    }

    @GetMapping
    public List<Task> getAllTasks() {return taskService.getAllTasks();}


    @PostMapping("/user/{userId}")
    public Task createTaskForUser(@PathVariable UUID userId, @RequestBody Task task){
        return taskService.addTaskToUser(userId, task);
    }

    @PutMapping("/{taskId}")
    public Task updateTask(@PathVariable UUID taskId, @RequestBody Task updated) {
        return taskService.updateTask(taskId, updated);
    }

    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable UUID taskId) {
        taskService.deleteTask(taskId);
    }
}
