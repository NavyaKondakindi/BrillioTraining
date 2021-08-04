package demo;

import java.util.function.Predicate;

public class C {
	static Boolean checkSalary(int Salary) {
		if(Salary<10000) {
			return false;
	}
	else {
		return true;
	}
}

	public static void main(String[] args) {
		Predicate<Integer> pre=C::checkSalary;
		boolean re=pre.test(12000);
		System.out.println(re);
	}
}
