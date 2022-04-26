import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner s = new Scanner(System.in); // 入力用に定義

        System.out.println("空白やタブ入りの文字列を入力してください！"); // 出力
        String str = s.nextLine(); // 入力

        System.out.println("処理前：" + str);

        // 関数名とその中身に分割
        int func_name_s = -1; // 関数名の始まり
        int func_name_e = -1; // 関数名の終わり

        // 関数名の位置を把握
        for (int str_idx = 0; str_idx < str.length(); str_idx++) {
            // 空白でなく、かつ最初の地点が決まっていない場合
            if ((str.charAt(str_idx) != ' ') && func_name_s == -1) {
                func_name_s = str_idx;
            }
            // 関数の終わりの文字だったら
            if (str.charAt(str_idx + 1) == '(') {
                func_name_e = str_idx;
                break;
            }
        }

        System.out.println("関数名の位置は、" + func_name_s + "~" + func_name_e);

        s.close();

    }
}
