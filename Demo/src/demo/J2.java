

package demo;
import java.util.*;

public class J2 {

	public static void main(String[] args) {
	Scanner sc=new Scanner(System.in);
	int year=sc.nextInt();
	sc.close();
	if((year%4==0)&&(year%100!=0)|| (year%400==0))
	{
		System.out.println("Leap year");
	}
	else
	{
		System.out.println("Not leap year");
	}

	}

}
