/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package arsw.app.test;

import arsw.app.temperature.ConverterStub;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author 2107990
 */
public class ConverterStubTest {
    
    public ConverterStubTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }
    
    @Before
    public void setUp() {
    }
    
    @After
    public void tearDown() {
    }

    /**
     * Test of convertir method, of class ConverterStub.
     */
    @Test
    public void testConvertir() throws Exception {
        System.out.println("convertir");
        String tipo = "fahrenheit";
        float grados = 10.0F;
        ConverterStub instance = new ConverterStub();
        float expResult = 50.0F;
        float result = instance.convertir(tipo, grados);
        assertEquals(expResult, result, 0.0);
        grados = 48.0F;
        tipo = "celsius";
        expResult=8.888889F;
        result=instance.convertir(tipo, grados);
        assertEquals(expResult, result, 0.0);
        
    }
    
}
