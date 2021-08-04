package demo;

public class J10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
int arr[]=new int[] {10,20,36,50,30};
int max=0,i;
for(i=0;i<arr.length;i++)
{
	if(arr[i]>max)
	{
		max=arr[i];
	}
}
System.out.println(max);
	}

}
