import React, {useState} from 'react';
import {Formik, Form, Field, FieldProps,} from 'formik';
import {useTranslation} from "next-i18next";
import s from './ContactForm.module.scss';
import cn from "classnames";
import {serialize} from 'object-to-formdata';

export type ContactFormValues = {
    name: string
    email: string
    message: string
}

export const ContactForm = () => {

    const {t} = useTranslation('contactForm');

    const [resultMessage, setResultMessage] = useState<boolean | undefined>();

    function validateEmail(value: string) {
        let error;
        if (!value) {
            error = t('warnRequired');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = t('warnEmail');
        }
        return error;
    }

    function validateTextLength(value: string) {
        let error;
        if (value.length < 3) error = t('warnMinLength');
        if (value.length > 240) error = t('warnMaxLength');
        return error;
    }

    async function onSubmitHandler(values: ContactFormValues) {
        const formData = serialize(values);
        const endpoint = "https://smartforms.dev/submit/626ce7227a195017922e26e2";
        const options = {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8",},
            body: formData,
        }
        return await fetch(endpoint, options);
    }

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                onSubmit={async (values: ContactFormValues, {resetForm}) => {
                    const result = await onSubmitHandler(values)
                        .then(res => {
                            console.log(res);
                            setResultMessage(res.ok);
                            if (res.ok) resetForm();
                        })
                        .catch(err => {
                            console.log(err)
                            setResultMessage(false);
                        })
                }}
            >
                {({errors, touched, isSubmitting}) => (
                    <Form className={s.form__body}>
                        <Field name="name" validate={validateTextLength}>
                            {({field}: FieldProps) => (
                                <>
                                    <label className={s.form__label} htmlFor="name">
                                        {t('name')}<sup className={s.special__mark}>*</sup>
                                        {errors.name && touched.name &&
                                            <span className={s.form__tip}>{errors.name}</span>}
                                    </label>
                                    <input type="text" {...field}
                                           className={cn(
                                               s.form__item,
                                               errors.name && touched.name && s.form__item__invalid,
                                           )}
                                    />
                                </>
                            )}
                        </Field>
                        <Field name="email" validate={validateEmail}>
                            {({field}: FieldProps) => (
                                <>
                                    <label className={s.form__label} htmlFor="email">
                                        {t('email')}<sup className={s.special__mark}>*</sup>
                                        {errors.email && touched.email &&
                                            <span className={s.form__tip}>{errors.email}</span>}
                                    </label>
                                    <input type="text" {...field}
                                           className={cn(
                                               s.form__item,
                                               errors.email && touched.email && s.form__item__invalid,
                                           )}
                                    />
                                </>
                            )}
                        </Field>
                        <Field name="message" validate={validateTextLength}>
                            {({field}: FieldProps) => (
                                <>
                                    <label className={s.form__label} htmlFor="message">
                                        {t('message')}<sup className={s.special__mark}>*</sup>
                                        {errors.message && touched.message &&
                                            <span className={s.form__tip}>{errors.message}</span>}
                                    </label>
                                    <textarea {...field} rows={5}
                                              className={cn(
                                                  s.form__item,
                                                  s.form__text,
                                                  errors.message && touched.message && s.form__item__invalid,
                                              )}
                                    />
                                </>
                            )}
                        </Field>
                        <button type="submit" className={s.form__btn} disabled={isSubmitting}>
                            {t('submit')}
                        </button>
                        {resultMessage !== undefined &&
                            <p className={s.form__result}>
                                {resultMessage ? t('resultGood') : t('resultBad')}
                            </p>
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
}