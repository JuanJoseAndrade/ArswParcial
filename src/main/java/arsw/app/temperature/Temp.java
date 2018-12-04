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
public class Temp {
    String tipo;
    float gradoact;
    float gradoconv;
    public Temp(String tipo, float gradoact){
        this.tipo=tipo;
        this.gradoact=gradoact;
    }
    public Temp convertir() throws TemperatureException{
        float result=0;
        float divi=(float)9/5;
        if(tipo.contentEquals("fahrenheit")){
            result=(gradoact*(divi)) +32;
        }
        else if(tipo.contentEquals("celsius")){
            result=(gradoact-32)/(divi);
        }
        else{
        throw new TemperatureException("No se pudo convertir el objeto");
        }
        gradoconv=result;
        return this;
    }
}
