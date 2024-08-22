package dev.floshf.FullStackApp2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FullStackApp2Application {

	public static void main(String[] args) {
		SpringApplication.run(FullStackApp2Application.class, args);
	}


}
