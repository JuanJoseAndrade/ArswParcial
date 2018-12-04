package arsw.app.test;


import arsw.app.temperature.Converter;
import arsw.app.temperature.TemperatureException;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@SpringBootTest()
public class ApplicationServicesTests {
    
    @Autowired
    @Qualifier("Stub")
    Converter ros;
  
    //Suponiendo que se usará el calculador de factores con impuestos y calculador tributario de 2016 de Colombia
    //El siguiente test mira si efectivamente se están calculando los impuestos teniendo en cuenta si es bebida o no
    @Test
    public void valoresFrontera() throws TemperatureException{
        /*Order o = new Order(4);
        o.addDish("BEER", 2);
        o.addDish("COKE", 3);
        Order o2 = new Order(5);
        o2.addDish("PIZZA", 3);
        o2.addDish("HOTDOG", 6);
        ros.addNewOrderToTable(o);
        ros.addNewOrderToTable(o2);

        Double totalorden1 = ((ros.getProductByName("BEER").getPrice()*1.16)*2)+((ros.getProductByName("COKE").getPrice()*1.16)*3);
        Double totalorden2 = ((ros.getProductByName("PIZZA").getPrice()*1.19)*3)+((ros.getProductByName("HOTDOG").getPrice()*1.19)*6);
        assertEquals(ros.calculateTableBill(4),Math.round(totalorden1));
        assertEquals(ros.calculateTableBill(5),Math.round(totalorden2));*/
    }
    
}
