package demo;

import java.util.*;
public class J3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int arr[]=new int[5];
		int sum=0,i;
		for(i=0;i<arr.length;i++)
		{
			arr[i]=sc.nextInt();
		}
		sc.close();
		for(i=0;i<arr.length;i++)
		{
			sum=sum+arr[i];
		}
		
		float avg=sum/5;
		System.out.println(sum+" "+avg);

	}

}
