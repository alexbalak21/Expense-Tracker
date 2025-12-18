package app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import app.dto.DemoModel;

@Controller
public class DemoController {

    @GetMapping("/")
    public String view(Model model) {
        model.addAttribute("model", new DemoModel("Hello World"));
        return "demo";
    }
}

