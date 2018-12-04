/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package arsw.app.temperature;

import org.springframework.stereotype.Service;

/**
 *
 * @author 2107990
 */
@Service("Stub")
public class ConverterStub implements Converter {
    @Override
    public float convertir(String tipo, float grados) throws TemperatureException{
        float result=0;
        float divi=(float)9/5;
        if(tipo.contentEquals("fahrenheit")){
            result=(grados*(divi)) +32;
        }
        else if(tipo.contentEquals("celsius")){
            result=(grados-32)/(divi);
        }
        else{
        throw new TemperatureException("No se pudo convertir el objeto");
        }
        return result;
    }
    @Override
    public Temp convertirTemp(String tipo, float grados) throws TemperatureException{
            Temp unit=new Temp(tipo,grados);
            unit.convertir();
            return new Temp(tipo,grados).convertir();
    }
    
}
