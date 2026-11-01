import { Link, useParams } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import MenuList from '../components/MenuList.jsx'
import SpecialBanner from '../components/SpecialBanner.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'

function VendorPage() {
    const { id } = useParams()
    const { vendors, loading, error, reload } = useVendors()

    if (loading) return <Loading />
    if (error) return <ErrorMessage message={error} onRetry={reload} />

    const vendor = vendors.find((v) => v.id === id)

    if (!vendor) {
        return (
            <div className="card">
                <h2>Vendor not found</h2>
                <p className="muted">No vendor with id "{id}".</p>
                <Link to="/">Back to vendors</Link>
            </div>
        )
    }

    const special = vendor.menu.find((item) => item.special)

    return (
        <section>
            <p><Link to="/">← All vendors</Link></p>
            <h2 className="section-title">Menu: {vendor.name}</h2>
            <p className="muted">{vendor.location} · {vendor.openHours}</p>
            {special && <SpecialBanner key={special.id} item={special} />}
            <MenuList items={vendor.menu} />
        </section>
    )
}

export default VendorPage