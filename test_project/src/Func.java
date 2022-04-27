public class Func {
    // 関数名
    String func_name = "text";

    // 関数名を返す
    public String check_function_name(String str, int s) {
        String func_name_str;

        int e = -1; // 後半の終わり

        // 後半の位置を把握
        for (int str_idx = s; str_idx < str.length(); str_idx++) {
            if (str.charAt(str_idx + 1) == ')') { // 中身の最後の位置だったら
                e = str_idx;
                break;
            }
        }

        func_name_str = str.substring(s, e + 1);

        return func_name_str;
    }
}
