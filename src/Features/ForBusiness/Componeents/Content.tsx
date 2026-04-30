

function Content () {



    return(

        <>
         <div className="pt-4">
        <section className="business-section">
            <h2 className="business-title">Solutions for Businesses</h2>
            <p className="business-subtitle">Streamline your operations with our comprehensive business shipping solutions designed for enterprises of all sizes.</p>
            
            <div className="business-grid">
                <div className="business-card">
                    <span className="business-icon">📦</span>
                    <h3 className="business-card-title">Bulk Shipping</h3>
                    <p className="business-description">Efficient handling of large volume shipments with dedicated logistics teams and competitive bulk rates for businesses.</p>
                    <a href="#" className="business-btn">Learn More</a>
                </div>
                
                <div className="business-card">
                    <span className="business-icon">🛒</span>
                    <h3 className="business-card-title">E-commerce Integration</h3>
                    <p className="business-description">Seamless API integration with your online store for automated order fulfillment and real-time tracking updates.</p>
                    <a href="#" className="business-btn">Learn More</a>
                </div>
                
                <div className="business-card">
                    <span className="business-icon">🏭</span>
                    <h3 className="business-card-title">Warehouse Support</h3>
                    <p className="business-description">Comprehensive warehouse management solutions including inventory tracking, order picking, and packing services.</p>
                    <a href="#" className="business-btn">Learn More</a>
                </div>
                
                <div className="business-card">
                    <span className="business-icon">🌍</span>
                    <h3 className="business-card-title">International Logistics</h3>
                    <p className="business-description">End-to-end international shipping solutions with customs clearance, documentation, and global network coverage.</p>
                    <a href="#" className="business-btn">Learn More</a>
                </div>
            </div>
        </section>
    </div>
        
        </>
    )
}

export default Content