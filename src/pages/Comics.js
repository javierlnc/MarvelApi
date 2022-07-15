const Comic = ()=>{
    const view = `
    <div class="comic-inner">
        <article class="comic-card">
            <img src="cover" alt="title">
            <h2>title</h2>
        </article>
        <article class="comic-card">
            <h3>ID:</h3>
            <h3>Description:</h3>
            <h3>Price:</h3>
        </article>
    </div>
    `;
    return view;
}
export default Comic;