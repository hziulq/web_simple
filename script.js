$(function() {
    $("#add-button").on("click",()=>{
        const value = $("#new-task").val().trim();

        if (value != ""){
            const new_task = 
            `
            <li>
                <span>${value}</span>
                <button class="delete-button">削除</button>
            </li>
            `

            $("#todo-list").append(new_task);
            $("#new-task").val("");
            console.log("todo-list item has added.");
        }
    });

    $("#todo-list").on("click", "li", (e)=>{
        $(e.currentTarget).toggleClass("completed");
    });

    $("#todo-list").on("click", "button", (e)=>{
        e.stopPropagation();
        
        const $task = $(e.currentTarget).parent();
        
        $task.fadeOut(300, ()=>{
            $($task).remove();
        });
    });

    $("#new-task").on("keypress",function(e){
        if (e.key === `Enter` || e.keyCode === 13){
            e.preventDefault();
            $("#add-button").click();
        }
    });

    // $("#todo-list").on("click", "li", function() {
    //     // クリックされた li 要素に 'completed' クラスをトグルで適用・解除 ($.toggleClass())
    //     $(this).toggleClass("completed");
    // });

//     // 1. タスク追加機能のイベントリスナーを設定
//     $("#add-button").on("click", function() {
//         // 入力フォームからテキストを取得
//         const taskText = $("#new-task").val().trim();

//         // テキストが空でなければタスクを追加
//         if (taskText !== "") {
//             // 新しいリストアイテム（li）のHTMLを作成
//             const newListItem = `
//                 <li>
//                     <span>${taskText}</span>
//                     <button class="delete-button">削除</button>
//                 </li>
//             `;

//             // 作成したHTMLをulリストの末尾に追加 ($.append())
//             $("#todo-list").append(newListItem);

//             // 入力フォームをクリア
//             $("#new-task").val("");
//         }
//     });

//     // ----------------------------------------------------

//     // 2. タスクの完了（打ち消し線）機能と削除機能のイベントリスナーを設定
//     // 将来追加される要素（li, button）に対してもイベントを有効にするため、
//     // 親要素である #todo-list に対してイベントデリゲーションを使用します。
    
//     // a) タスク（li）クリックで完了状態をトグル
//     $("#todo-list").on("click", "li", function() {
//         // クリックされた li 要素に 'completed' クラスをトグルで適用・解除 ($.toggleClass())
//         $(this).toggleClass("completed");
//     });

//     // b) 削除ボタンクリックでタスクを削除
//     $("#todo-list").on("click", ".delete-button", function(e) {
//         // li 要素のクリックイベント（完了トグル）が同時に発火するのを防ぐ
//         e.stopPropagation(); 
        
//         // 削除ボタンの親要素（li）を取得し、アニメーションをつけてから削除 ($.parent(), $.fadeOut(), $.remove())
//         $(this).parent()
//             .fadeOut(300, function() {
//                 $(this).remove(); // アニメーション完了後にDOMから要素を削除
//             });
//     });

});

