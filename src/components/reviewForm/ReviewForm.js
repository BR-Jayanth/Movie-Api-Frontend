import React from 'react'
import { Form, Button } from 'react-bootstrap'

export const ReviewForm = ({handleSubmit,revText,labelText,defaultValue}) => {
    // Review form
    return (
        <Form>

            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={revText} as="textarea" rows={3} defaultValue={defaultValue}>

                </Form.Control>
            </Form.Group>
            <Button onClick={handleSubmit} variant='outline-info'>Submit</Button>
        </Form>
    )
}
