package com.example.backend.service;

import com.example.backend.model.Task;
import com.example.backend.model.User;
import com.example.backend.repository.TaskRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    //Read
    public List<Task> getTasksByUser(UUID userId) {
        return taskRepository.findByUserId(userId);
    }

    //Read all
    public List<Task> getAllTasks(){ return taskRepository.findAll();}


    //Post
    public Task addTaskToUser(UUID userId, Task task) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        task.setUser(user);
        return taskRepository.save(task);
    }

    //Put Update Task
    public Task updateTask(UUID taskId, Task updatedTask) {
        Task existingTask = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));

        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setDay(updatedTask.getDay());
        existingTask.setHour(updatedTask.getHour());

        return taskRepository.save(existingTask);
    }

    //Delete
    public void deleteTask(UUID taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));

        taskRepository.delete(task);
    }
}
