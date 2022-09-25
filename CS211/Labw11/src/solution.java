import java.util.*;
public class solution {
    public static char[] tested = new char[8];
    public static char[] totestvowels = {'a','e','i'};
    public static char[] alphabet = {'b','c','d','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
    public static int testind = 0;
    public static void main(String[]args)
    {

    }
    public char guessletter(){
        if(testind == 0)
        {
            tested[testind] = totestvowels[0];
            testind++;
            return totestvowels[0];
        }
        if(testind == 1)
        {
            tested[testind] = totestvowels[0];
            testind++;
            return totestvowels[1];
        }
        if(testind == 2)
        {
            tested[testind] = totestvowels[0];
            testind++;
            return totestvowels[2];
        }
        if(testind == 7)
        {

        }
        else
        {
            Random r = new Random();
            boolean check = false;
            char c = ' ';
            while(!check)
            {
                c = alphabet[r.nextInt(alphabet.length)];
                boolean check2 = false;
                for(int i = 0; i <tested.length; i++)
                {
                    if(c == tested[i]) {
                        check2 = true;
                    }
                }
                if(!check2)
                {
                    testind++;
                    return c;
                }
            }
        }
    }
}
