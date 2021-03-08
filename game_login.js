function add_user (){
player_1_name=document.getElementById("player1_nameinput").value 
player_2_name=document.getElementById("player2_nameinput").value
localStorage.setItem("player_1_name",player_1_name)
localStorage.setItem("player_2_name",player_2_name)
window.location="game_page.html"
}
