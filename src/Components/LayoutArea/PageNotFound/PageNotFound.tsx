import "./PageNotFound.css";

export function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<p>The page doesn't exist.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true" allow="autoplay" title="Page not Found"></iframe>
        </div>
    );
}
