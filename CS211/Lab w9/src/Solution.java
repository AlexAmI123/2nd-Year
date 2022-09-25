import java.util.*;

public class Solution{

    public static void main(String[] args){
        int lives = 200;
        Scanner myScanner = new Scanner(System.in);
        String[] input = new String[20];
        for(int i=0;i<20;i++){
            input[i]=myScanner.nextLine();
        }

        int posX=Integer.parseInt(myScanner.nextLine());
        int posY=Integer.parseInt(myScanner.nextLine());

        boolean[][] maze = new boolean[20][20];
        for(int i=0;i<20;i++){
            for(int j=0;j<20;j++){
                if(input[j].charAt(i)=='X'){
                    maze[i][j]=false;
                }else{
                    maze[i][j]=true;
                }
            }
        }
        Brain myBrain = new Brain();


        while(lives>0){
            String move =myBrain.getMove(maze[posX][posY-1],maze[posX][posY+1],maze[posX+1][posY],maze[posX-1][posY]);
            if(move=="north"&&maze[posX][posY-1]){
                posY--;
            }else if(move=="south"&&maze[posX][posY+1]){
                posY++;
            }else if(move=="east"&&maze[posX+1][posY]){
                posX++;
            }else if(move=="west"&&maze[posX-1][posY]){
                posX--;
            }
            lives--;
            if(posY%19==0||posX%19==0){
                System.out.println(posX+","+posY);
                System.exit(0);
            }
        }
        System.out.println("You died in the maze!");
    }
}
/*
class Brain{

    public String getMove(boolean north, boolean south, boolean east, boolean west){
        int random = (int)(Math.random()*4);
        switch(random){
            case 0: return "north";
            case 1: return "south";
            case 2: return "east";
            default: return "west";
        }
    }
}
 */