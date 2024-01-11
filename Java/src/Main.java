import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Integer num1 = new Integer(10);
        System.out.println(num1);
        Integer num2 = num1;
        System.out.println(num2);
        num1 = 20;
        System.out.println(num1);
        System.out.println(num2);
    }
}