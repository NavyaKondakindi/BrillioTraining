package demo;

public class J7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s="dod";
		StringBuffer sc=new StringBuffer(s);
		sc.reverse();
		String str=sc.toString();
		if(str.equals(s))
		{
			System.out.println("palindrome");
		}
		else
		{
			System.out.println("Not");
		}
		

	}

}
