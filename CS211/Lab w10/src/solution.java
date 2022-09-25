(Brak tematu)

Przetłumacz wiadomość na język: Polski | Nigdy nie tłumacz z języka: Angielski
ALEX GABRIEL MAJKA
Cz, 28.04.2022 17:35
import java.nio.file.Files;
import java.util.*;
import java.nio.file.Files;
import java.nio.file.Paths;
public class solution {
    public static void main(String[]args)throws Exception
    {
        ArrayList<Double> list = new ArrayList<>();
        List<String> words = Files.lines(Paths.get("C:\\Users\\alexm\\Desktop\\School\\CS211\\labw10\\schools.txt")).toList();
        String [][] coords = new String [words.size()][2];
        //getting the coords
        for(int i = 0; i < words.size(); i++)
        {
            String c = words.get(i);
            String[] split = c.split(" ", 2);

            coords[i][0] = split[0];
            coords[i][1] = split[1];
        }
        double smallest = 100000000;
        String scord1 = "";
        String scord2 = "";
        String scord3 = "";
        String scord4 = "";
        //getting distances
        for(int i = 0; i < coords.length; i++)
        {
            for(int j = 0; j < coords.length; j++) {
                double dist = getDistance("" + coords[i][0], "" + coords[i][1],"" + coords[j][0],"" + coords[j][1]);
                if(dist > 0) {
                    list.add(dist);
                    if(dist < smallest)
                    {
                        smallest = dist;
                        scord1 = ""+ coords[i][0];
                        scord2 = ""+ coords[i][1];
                        scord3 = ""+ coords[j][0];
                        scord4 = ""+ coords[j][1];
                    }
                }
            }
        }
        //list.sort(Comparator.naturalOrder());
        System.out.println("The closest schools are from: ("+ scord1 + ", " + scord2 + ") Are (" + scord3 + ", " + scord4 + ") with dist " + smallest);
    }
    public static double getDistance(String lt1, String ln1, String lt2, String ln2)
    {
        double lat1 = Double.parseDouble(lt1);
        double lon1 = Double.parseDouble(ln1);
        double lat2 = Double.parseDouble(lt2);
        double lon2 = Double.parseDouble(ln2);

        double r = 6371;
        double dlat = Math.toRadians(lat2-lat1);
        double dlon = Math.toRadians(lon2-lon1);
        double a = Math.sin(dlat/2) * Math.sin(dlat/2) + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) * Math.sin(dlon/2) * Math.sin(dlon/2);
        double c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return r * c;
    }
}
