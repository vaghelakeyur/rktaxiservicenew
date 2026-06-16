/**
 * Lightweight booking store — uses a CustomEvent on window so any component
 * can fire a pre-fill without prop-drilling or a state library.
 *
 * Usage (sender):
 *   import { prefillBooking } from '../utils/bookingStore'
 *   prefillBooking({ pickup: 'Rajkot', drop: 'Ahmedabad' })
 *
 * Usage (receiver — BookingForm):
 *   import { onBookingPrefill, offBookingPrefill } from '../utils/bookingStore'
 *   useEffect(() => {
 *     const handler = ({ detail }) => setForm(f => ({ ...f, ...detail }))
 *     onBookingPrefill(handler)
 *     return () => offBookingPrefill(handler)
 *   }, [])
 */

export const BOOKING_PREFILL_EVENT = 'rk:bookingPrefill'

export function prefillBooking({ pickup = '', drop = '' }) {
  window.dispatchEvent(
    new CustomEvent(BOOKING_PREFILL_EVENT, { detail: { pickup, drop } })
  )
}

export function onBookingPrefill(handler) {
  window.addEventListener(BOOKING_PREFILL_EVENT, handler)
}

export function offBookingPrefill(handler) {
  window.removeEventListener(BOOKING_PREFILL_EVENT, handler)
}
