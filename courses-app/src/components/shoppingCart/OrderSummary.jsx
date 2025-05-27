import { Box, Typography, Divider, Stack, TextField, Button } from "@mui/material";

const OrderSummary = ({
  subtotalPrice,
  subtotalDiscount,
  promoCode,
  promoCodeInput,
  promoError,
  onPromoCodeChange,
  onApplyPromoCode,
  totalPrice,
  calculateTotalPrice
}) => {
  const promoCodeFlag = promoCode.length > 0;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') onApplyPromoCode();
    };

  return (
    //   {/* ORDER SUMMARY */}
    <Box>
      
      {/* Subtotal and discount */}
      <Box display="flex" justifyContent="space-between" sx={{ mb: { xs: 1, lg: 3 } }}>
        <Typography variant="body1">Subtotal</Typography>
        <Typography variant="body1">€{subtotalPrice.toFixed(2)}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" sx={{ mb: { xs: 1, lg: 3 } }}>
        <Typography variant="body1">Discount</Typography>
        <Typography variant="body1" color="red">- €{subtotalDiscount.toFixed(2)}</Typography>
      </Box>

      {/* Promo code display */}
      {promoCodeFlag &&
        promoCode.map((code) => (
          <Box key={code.id} display="flex" justifyContent="space-between" sx={{ mb: { xs: 1, lg: 3 } }}>
            <Typography variant="body1">{code.code}</Typography>
            <Typography variant="body1" color="red">
              {code.discountType === "fixed"
                ? `- €${code.discountValue.toFixed(2)}`
                : `- ${code.discountValue}%`}
            </Typography>
          </Box>
        ))}

      <Divider sx={{ border: "1px solid black", mb: { xs: 1.5, lg: 4 } }} />

      {/* Total */}
      <Box display="flex" justifyContent="space-between" sx={{ mb: { xs: 1, lg: 3 } }}>
        <Typography variant="body1" fontSize="large" fontWeight="bold">Total</Typography>
        <Typography variant="body1" fontSize="large" fontWeight="bold">
          €{calculateTotalPrice(totalPrice).toFixed(2)}
        </Typography>
      </Box>

      {/* Promo code input */}
      <Box display="flex" justifyContent="center">
        <Stack direction="row" gap={2} alignItems="flex-start" sx={{ mb: { xs: 2, lg: 4 } }}>
          <TextField
            label="Promo code"
            size="small"
            value={promoCodeInput}
            onChange={onPromoCodeChange}
            error={promoError}
            onKeyDown={handleKeyDown}
            helperText={promoError ? (promoCodeInput.trim() === "" ? "Enter a code" : `${promoCodeInput} is not a valid code`) : ""}
          />
          <Button variant="contained" sx={{ padding: 1 }} onClick={onApplyPromoCode}>
            Apply
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default OrderSummary;