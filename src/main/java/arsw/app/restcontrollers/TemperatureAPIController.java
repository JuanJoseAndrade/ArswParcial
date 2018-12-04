/*
 * Copyright (C) 2016 Pivotal Software, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package arsw.app.restcontrollers;

import arsw.app.temperature.Converter;
import arsw.app.temperature.TemperatureException;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.util.Hashtable;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import static org.aspectj.weaver.tools.cache.SimpleCacheFactory.path;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Juan
 */

@RestController
@RequestMapping(value = "/temperature") 
 public class TemperatureAPIController {
        
        @Autowired
        @Qualifier("Stub")
        Converter converttemp;
        
        @GetMapping("/celsius/{grados}")
            public ResponseEntity<?> getOrder(@PathVariable float grados) {
                try {
                    return new ResponseEntity<>(converttemp.convertir("celsius", grados),HttpStatus.ACCEPTED);
                } catch (TemperatureException ex) {
                    Logger.getLogger(TemperatureAPIController.class.getName()).log(Level.SEVERE, null, ex);
                    return new ResponseEntity<>("Error 404, esa orden no existe en el sistema",HttpStatus.NOT_FOUND);
                }
            
            }
        @GetMapping("/fahrenheit/{grados}")    
            public ResponseEntity<?> getOrderTotal(@PathVariable float grados) {
                try {
                    return new ResponseEntity<>(converttemp.convertir("fahrenheit", grados),HttpStatus.ACCEPTED);
                } catch (TemperatureException ex) {
                    Logger.getLogger(TemperatureAPIController.class.getName()).log(Level.SEVERE, null, ex);
                    return new ResponseEntity<>("Error 404, esa orden no existe en el sistema",HttpStatus.NOT_FOUND);
                }
            }
 	
}       
 

