const Header = () =>{
    const view = `
    <div class="header-main">
        <div class="header--logo">
            <a href="/">
                <img src="image" alt="logo">
            </a>            
        </div>
        <div class="header-nav">
            <ul>
                <li><a href="/">Comics</a></li>
                <li><a href="#/HomeCharacter">Charactes</a></li>
                <li><a href="#/about">About</a></li>
            </ul>
        </div>
    </div>   
    `;
    return view;
}
export default Header;