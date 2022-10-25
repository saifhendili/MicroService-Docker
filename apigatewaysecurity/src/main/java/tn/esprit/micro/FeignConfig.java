package tn.esprit.micro;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.auth.BasicAuthRequestInterceptor;

@Configuration
public class FeignConfig {
	@Bean 
	public BasicAuthRequestInterceptor mBasicAuthRequestIntercptor() {
		return new BasicAuthRequestInterceptor ("user" , "user");
	}

}
