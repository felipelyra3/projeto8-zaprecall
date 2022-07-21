export default function FooterFlashCards({answered, count, setCount}) {
    setCount(count++);
    return (
        <div className="mobile mobileFooter">
            <p>{count}/8</p>
            <p></p>
        </div>
    );
}