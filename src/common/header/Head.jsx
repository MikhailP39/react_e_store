import React from "react";

const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container d-flex'>
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label>+48 508 7643 7034</label>
                        <i className='fa fa-envelope'></i>
                        <label>exaple@gmail.com</label>
                    </div>
                    <div className='right row RText'>
                        <label>Theme FAQ's</label>
                        <label>Need Helps</label>
                        <span>🏳️‍⚧</span>
                        <label htmlFor=''>EN</label>
                        <span>🏳️‍⚧</span>
                        <label htmlFor=''>USD</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head