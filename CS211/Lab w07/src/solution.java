public class solution {
    public int find(int size, HashTable mytable, String word)
    {
        /*int total = 0;
        for(int i = 0; i < word.length(); i++)
        {
            total = total+(int)word.charAt(i);
        }
        int answer = total%size;
        int jumpsize = 1;
        while(mytable.check(answer,word)!=true)
        {
            answer = answer+jumpsize;
            jumpsize++;
            answer = answer%size;
        }
        return answer;*/
        int total = 1;
        for(int i = 0; i < word.length(); i++)
        {
            total = total*(int)word.charAt(i);
        }
        int answer = total%size;
        int jumpsize = 1;
        while(mytable.check(answer,word)!=true)
        {
            answer = answer+(jumpsize^3);
            jumpsize++;
            answer = answer%size;
        }
        return answer;
    }
    public String[] fill(int size, String[]array)
    {
        /*String[] hashtable = new String[size];
        for(int i =0; i<size;i++)
        {
            hashtable[i]="";
        }
        for(int i = 0; i<array.length; i++)
        {
            int total = 0;
            for(int j = 0; j < array[i].length();j++)
            {
                total = total + (int)array[i].charAt(j);
            }
            total = total%size;
            int jumpsize = 1;
            while(hashtable[total]!="")
            {
                total = total+jumpsize;
                jumpsize++;
                total = total % size;
            }
            hashtable[total] = array[i];
        }
        return hashtable;*/
        String[] hashtable = new String[size];
        for(int i =0; i<size;i++)
        {
            hashtable[i]="";
        }
        for(int i = 0; i<array.length; i++)
        {
            int total = 1;
            for(int j = 0; j < array[i].length();j++)
            {
                total = total * (int)array[i].charAt(j);
            }
            total = total%size;
            int jumpsize = 1;
            while(hashtable[total]!="")
            {
                total = total+(jumpsize^3);
                jumpsize++;
                total = total % size;
            }
            hashtable[total] = array[i];
        }
        return hashtable;
    }
}
