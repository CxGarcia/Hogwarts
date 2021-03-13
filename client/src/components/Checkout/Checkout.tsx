import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import Payment from './PaymentForm';
import postOrder from '../../Services/orderService';
import { RouteComponentProps } from '@reach/router';
import OrdersInterface from 'types/orders';

//TODO - gather interface in a dedicated folder
interface User {
  id?: number;
}

interface CheckoutProps {
  user: User;
  path: RouteComponentProps;
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: '100px',
    marginBottom: '120px',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Service details', 'Payment details'];

const Checkout: React.FC<CheckoutProps> = ({ user }) => {
  //create new order
  const [order, setOrder] = useState<OrdersInterface | null>(null);

  const createOrder = async (order: OrdersInterface): Promise<void> => {
    const { cost, serviceId } = order;

    const _order = await postOrder(cost, 'Card', 1, user.id, serviceId);

    setOrder(_order);
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    console.log('I AM HANDLE NEXT');
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            handleNext={handleNext}
            createOrder={createOrder}
            user={user}
          ></AddressForm>
        );
      case 1:
        return <Review order={order} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Let The Magic Happen
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {getStepContent(activeStep)}
          <div className={classes.buttons}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>
            )}
            {activeStep === 1 ? <Payment order={order} /> : null}
          </div>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
