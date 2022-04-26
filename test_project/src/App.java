import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner s = new Scanner(System.in); // 入力用に定義

        System.out.println("空白やタブ入りの文字列を入力してください！"); // 出力
        String str = s.nextLine(); // 入力

        System.out.println("処理前：" + str);

        // 前半部分
        int first_s = -1; // 関数名の始まり
        int first_e = -1; // 関数名の終わり

        // 関数名の位置を把握
        for (int str_idx = 0; str_idx < str.length(); str_idx++) {
            // 空白でなく、かつ最初の地点が決まっていない場合
            if ((str.charAt(str_idx) != ' ') && first_s == -1) {
                first_s = str_idx;
            }
            // 関数の終わりの文字だったら
            if (str.charAt(str_idx + 1) == '(') {
                first_e = str_idx;
                break;
            }
        }

        System.out.println("関数名の位置は、" + first_s + "~" + first_e);

        // 後半部分
        int latter_s = first_e + 2; // 関数の中身の始まり
        int latter_e = -1; // 関数の中身の終わり

        // 関数の中身の位置を把握
        for (int str_idx = latter_s; str_idx < str.length(); str_idx++) {
            if (str.charAt(str_idx + 1) == ')') { // 中身の最後の位置だったら
                latter_e = str_idx;
                break;
            }
        }

        System.out.println("関数の中身の位置は、" + latter_s + "~" + latter_e);

        System.out.print("\n");

        String func_name = str.substring(first_s, first_e + 1);
        String inner = str.substring(latter_s, latter_e + 1);

        System.out.println("関数名：" + func_name);
        System.out.println("関数の中身：" + inner);

        s.close();

    }
}
