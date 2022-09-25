import java.util.*;

public class Solution {
    public static void main(String[]args)
    {
        //opening scanner, getting input, closing scanner
        Scanner sc = new Scanner(System.in);
        int base1 = sc.nextInt();
        int base2 = sc.nextInt();
        //String num = sc.nextInt();
        int num = sc.nextInt();
        sc.close();

        //String digits = "0123456789ABCDEF";
        //calling the method
        System.out.println(convertDecimal(num, base2+(base1/2)));

    }
    //basic method
    public static int convertDecimal(int input, int base)
    {
        int ans = 0;
        int mp = 1;
        while(input!=0)
        {
            ans = (input%10)*mp+ans;
            input = input/10;
            mp = mp*base;
        }
        return ans;
    }
}
