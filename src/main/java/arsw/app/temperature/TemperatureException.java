/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package arsw.app.temperature;

/**
 *
 * @author 2107990
 */
public class TemperatureException extends Exception {
    	public TemperatureException(String message, Throwable cause) {
		super(message, cause);
	}

	public TemperatureException(String message) {
		super(message);
	}
}
