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
public interface Converter {
    public float convertir(String tipo, float grados) throws TemperatureException;
    public Temp convertirTemp(String tipo, float grados) throws TemperatureException;
}
