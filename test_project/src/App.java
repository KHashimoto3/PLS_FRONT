import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner s = new Scanner(System.in); // 入力用に定義

        System.out.println("文字列を入力してください！"); // 出力
        String str = s.nextLine(); // 入力

        System.out.println(str);

        // 関数名とその中身に分割
        int func_name_s; // 関数名の始まり
        int func_name_e; // 関数名の終わり

        s.close();

    }
}
