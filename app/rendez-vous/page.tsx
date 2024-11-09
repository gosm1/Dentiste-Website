'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiCalendar, FiClock } from 'react-icons/fi'
import { format } from 'date-fns'
import Navbar from '@/components/Navbar'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';


// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),
  phone: z.string().min(10, { message: "Veuillez entrer un numéro valide." }),
  date: z.date({ required_error: "La date est requise." }),
  time: z.string().nonempty({ message: "L'heure est requise." }),
})

const BookingForm = () => {
  const [successMessage, setSuccessMessage] = useState("")
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: new Date(),
      time: "",
    },
  })

  const onSubmit = (values:any) => {
    toast.success('Votre rendez-vous a été réservé avec succès!')

    form.reset()
  }

  return (
    <main>

    <Navbar/>
    <div className="py-28 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Réservez votre rendez-vous</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <Input placeholder="Entrez votre nom" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Entrez votre email" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <Input type="tel" placeholder="+212 66843-9890" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between text-left"
                    >
                      {field.value ? format(field.value, "PPP") : "Select a date"}
                      <FiCalendar className="ml-2 h-5 w-5 text-gray-500" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heure</FormLabel>
                <div className="relative">
                  <Input type="time" {...field} />
                  <FiClock className="absolute right-2 top-3 text-gray-400" />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Réserver</Button>
          
        </form>
      </Form>
      <ToastContainer/>
    </div>
    </main>
  )
}

export default BookingForm
