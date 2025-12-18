package app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import app.model.DataModel;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class IndexController {
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("data", new DataModel("Home"));
        return "index";
    }
    

    @PostMapping("/")
    public String getMessage(HttpServletRequest request, Model model) {
        String message = request.getParameter("message");
        if (message != null && message == "") {
            model.addAttribute("data", new DataModel(message));
        } else {
            model.addAttribute("data", new DataModel("No message provided"));
        }
        return "index";
    }

}
